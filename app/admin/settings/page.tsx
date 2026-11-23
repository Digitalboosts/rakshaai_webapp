'use client';

import React, { useState } from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { 
  Settings as SettingsIcon, 
  Save, 
  Mail,
  Shield,
  Globe,
  Bell,
  Database,
  Key
} from 'lucide-react';

export default function AdminSettingsPage() {
  // Dummy settings data
  const [settings, setSettings] = useState({
    siteName: 'RakshaAI',
    siteDescription: 'Advanced AI-powered scam detection platform',
    adminEmail: 'admin@rakshaai.com',
    enableNotifications: true,
    autoModeration: true,
    trustScoreThreshold: 75,
    apiRateLimit: 1000,
    maintenanceMode: false,
  });

  const handleInputChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    // In a real app, this would save to backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar currentPage="settings" />
        <AdminSidebar currentPage="settings" />
        
        {/* Main Content */}
        <div className="md:pl-64 pt-16">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Settings
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Configure platform settings and preferences
              </p>
            </div>

            <div className="space-y-6">
              {/* General Settings */}
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    General Settings
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Site Name"
                    value={settings.siteName}
                    onChange={(e) => handleInputChange('siteName', e.target.value)}
                  />
                  <Input
                    label="Admin Email"
                    type="email"
                    value={settings.adminEmail}
                    onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                  />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Site Description
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      rows={3}
                      value={settings.siteDescription}
                      onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                    />
                  </div>
                </div>
              </Card>

              {/* Security Settings */}
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Security Settings
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Trust Score Threshold (%)"
                    type="number"
                    min="0"
                    max="100"
                    value={settings.trustScoreThreshold}
                    onChange={(e) => handleInputChange('trustScoreThreshold', parseInt(e.target.value))}
                  />
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Auto Moderation
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Automatically moderate suspicious content
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={settings.autoModeration}
                        onChange={(e) => handleInputChange('autoModeration', e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </Card>

              {/* API Settings */}
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <Key className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    API Settings
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="API Rate Limit (per minute)"
                    type="number"
                    value={settings.apiRateLimit}
                    onChange={(e) => handleInputChange('apiRateLimit', parseInt(e.target.value))}
                  />
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Maintenance Mode
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Enable maintenance mode for the API
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={settings.maintenanceMode}
                        onChange={(e) => handleInputChange('maintenanceMode', e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </Card>

              {/* Notification Settings */}
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <Bell className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Notification Settings
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Email Notifications
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Receive email notifications for important events
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={settings.enableNotifications}
                        onChange={(e) => handleInputChange('enableNotifications', e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button onClick={handleSaveSettings} className="flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Settings</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminRouteGuard>
  );
}