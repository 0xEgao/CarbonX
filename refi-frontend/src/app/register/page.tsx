"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kdfpylohbcwcybjszfyt.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

type OrganisationType = 'Solar' | 'Wind' | 'Water' | 'Reforestation' | '';

interface FormData {
  country: string;
  organisation_type: OrganisationType;
  carbon_offset: string;
  wallet_pubkey: string;
  value_of_nft: string;
  image: File | null;
  image_url: string;
}

const Register: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    country: '',
    organisation_type: '',
    carbon_offset: '',
    wallet_pubkey: '',
    value_of_nft: '',
    image: null,
    image_url: ''
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formStep, setFormStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file (SVG, PNG, JPG, or GIF)');
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      
      setFormData({
        ...formData,
        image: file
      });
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      setError(null);
    }
  };

  const nextStep = (): void => {
    setFormStep(formStep + 1);
  };

  const prevStep = (): void => {
    setFormStep(formStep - 1);
  };

  const uploadImageToSupabase = async (): Promise<string | null> => {
    if (!formData.image) {
      setError('No image selected');
      return null;
    }
    
    try {
      setUploadProgress(0);
      
      // Create unique file name
      const fileExt = formData.image.name.split('.').pop();
      const fileName = `${formData.wallet_pubkey}_${Date.now()}.${fileExt}`;
      const filePath = `projects/${fileName}`;
      
      // Upload file
      const { error: uploadError } = await supabase.storage
        .from('nftimages')
        .upload(filePath, formData.image, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        if (uploadError.message.includes('row-level security')) {
          throw new Error('Image upload failed: Storage permissions denied. Please contact support.');
        }
        throw uploadError;
      }
      
      // Get public URL
      const { data } = supabase.storage
        .from('nftimages')
        .getPublicUrl(filePath);
      
      if (!data?.publicUrl) {
        throw new Error('Failed to get public URL');
      }
      
      setUploadProgress(100);
      return data.publicUrl;
      
    } catch (error: any) {
      console.error('Error uploading image:', error.message);
      setError(`Error uploading image: ${error.message}`);
      return null;
    }
  };

  const saveFormDataToSupabase = async (imageUrl: string): Promise<boolean> => {
    try {
      const carbonOffset = parseFloat(formData.carbon_offset);
      const nftValue = parseFloat(formData.value_of_nft);
      
      if (isNaN(carbonOffset) || isNaN(nftValue)) {
        throw new Error('Invalid number format for carbon offset or NFT value');
      }

      const { error } = await supabase
        .from('nft')
        .insert([
          {
            country: formData.country,
            organisation_type: formData.organisation_type,
            carbon_offset: carbonOffset,
            wallet_pubkey: formData.wallet_pubkey,
            value_of_nft: nftValue,
            image_url: imageUrl,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        if (error.message.includes('row-level security')) {
          throw new Error('Data save failed: Database permissions denied. Please contact support.');
        }
        throw error;
      }
      
      return true;
      
    } catch (error: any) {
      console.error('Error saving data:', error.message);
      setError(`Error saving data: ${error.message}`);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);
    
    try {
      // Validate required fields
      if (!formData.country || !formData.organisation_type || !formData.carbon_offset ||
          !formData.wallet_pubkey || !formData.value_of_nft || !formData.image) {
        throw new Error('All fields are required');
      }

      // Upload image
      const imageUrl = await uploadImageToSupabase();
      
      if (!imageUrl) {
        throw new Error('Failed to upload image');
      }
      
      // Save form data
      const success = await saveFormDataToSupabase(imageUrl);
      
      if (success) {
        setSuccessMessage('NFT registered successfully!');
        // Reset form
        setFormData({
          country: '',
          organisation_type: '',
          carbon_offset: '',
          wallet_pubkey: '',
          value_of_nft: '',
          image: null,
          image_url: ''
        });
        setImagePreview(null);
        setFormStep(1);
      }
      
    } catch (error: any) {
      console.error('Form submission error:', error.message);
      setError(`Form submission failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormStep = (): React.ReactElement | null => {
    switch(formStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="country" className="text-sm font-medium text-gray-300 block mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Enter your country"
              />
            </div>

            <div className="relative">
              <label htmlFor="organisation_type" className="text-sm font-medium text-gray-300 block mb-2">
                Organisation Type
              </label>
              <div className="relative">
                <select
                  id="organisation_type"
                  name="organisation_type"
                  value={formData.organisation_type}
                  onChange={handleChange}
                  required
                  className="appearance-none w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                >
                  <option value="" disabled>Select organisation type</option>
                  <option value="Solar">Solar</option>
                  <option value="Wind">Wind</option>
                  <option value="Water">Water</option>
                  <option value="Reforestation">Reforestation</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Next Step</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="carbon_offset" className="text-sm font-medium text-gray-300 block mb-2">
                Carbon Offset
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="carbon_offset"
                  name="carbon_offset"
                  value={formData.carbon_offset}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white pr-16"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400 border-l border-gray-700">
                  TCO2e
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-400">One metric ton equivalent of CO2</p>
            </div>

            <div className="relative">
              <label htmlFor="value_of_nft" className="text-sm font-medium text-gray-3
              00 block mb-2">
                Value of NFT
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="value_of_nft"
                  name="value_of_nft"
                  value={formData.value_of_nft}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white pr-16"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400 border-l border-gray-700">
                  SOL
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                type="button" 
                onClick={prevStep}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span>Previous</span>
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Next Step</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="wallet_pubkey" className="text-sm font-medium text-gray-300 block mb-2">
                Wallet Public Key
              </label>
              <input
                type="text"
                id="wallet_pubkey"
                name="wallet_pubkey"
                value={formData.wallet_pubkey}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Enter your wallet public key"
              />
            </div>

            <div className="relative">
              <label htmlFor="image" className="text-sm font-medium text-gray-300 block mb-2">
                Upload Image
              </label>
              <div className="flex flex-col items-center justify-center w-full">
                <label 
                  htmlFor="image" 
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer ${imagePreview ? 'border-green-500 bg-green-500/10' : 'border-gray-600 bg-gray-800/50 hover:bg-gray-700/30'}`}
                >
                  {imagePreview ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                        <p className="text-white text-sm">
                          Click to change image
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-300">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 5MB)
                      </p>
                    </div>
                  )}
                  <input 
                    id="image" 
                    name="image" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
              {successMessage && (
                <p className="mt-2 text-sm text-green-500">{successMessage}</p>
              )}
            </div>

            <div className="flex justify-between">
              <button 
                type="button" 
                onClick={prevStep}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg shadow-lg transition-all duration-200 flex items-center space-x-2"
                disabled={isSubmitting}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span>Previous</span>
              </button>
              <button 
                type="submit" 
                className={`px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg shadow-lg hover:shadow-green-500/30 transition-all duration-200 flex items-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Uploading {uploadProgress > 0 ? `(${uploadProgress}%)` : ''}</span>
                  </>
                ) : (
                  <>
                    <span>Register NFT</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl shadow-xl overflow-hidden">
              <div className="p-1 py-20">
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-6">Register Your NFT</h2>
                  
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                          {formStep > 1 ? (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          ) : (
                            <span>1</span>
                          )}
                        </div>
                        <span className="ml-2 text-sm text-gray-300">Project Details</span>
                      </div>
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                          {formStep > 2 ? (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          ) : (
                            <span>2</span>
                          )}
                        </div>
                        <span className="ml-2 text-sm text-gray-300">Carbon & Value</span>
                      </div>
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-blue-500' : 'bg-gray-700'}`}>
                          <span>3</span>
                        </div>
                        <span className="ml-2 text-sm text-gray-300">Wallet & Media</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300 ease-in-out" 
                        style={{ width: `${((formStep - 1) / 2) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    {renderFormStep()}
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-gray-400 mb-4">
                  Having trouble registering your environmental project? Our team is here to help you through the process.
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white text-center rounded-lg transition duration-200"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 CarbonX - All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/marketplace" className="text-gray-400 hover:text-white transition duration-200">
              Marketplace
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition duration-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition duration-200">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;