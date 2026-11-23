'use client';

import React, { useState } from 'react';
import { AdminRouteGuard } from '@/components/AdminRouteGuard';
import { AdminNavbar, AdminSidebar } from '@/components/AdminNavigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  MessageSquare, 
  Search, 
  Filter,
  ThumbsUp,
  ThumbsDown,
  Eye,
  CheckCircle,
  XCircle
} from 'lucide-react';

// Dummy reviews data
const dummyReviews = [
  {
    id: '1',
    website: 'amazon.in',
    reviewer: 'John Doe',
    rating: 5,
    comment: 'Great website, very trustworthy for online shopping.',
    date: '2024-01-05',
    status: 'approved',
    helpful: 15,
    notHelpful: 2,
  },
  {
    id: '2',
    website: 'flipkart.com',
    reviewer: 'Jane Smith',
    rating: 4,
    comment: 'Good platform but sometimes delivery is delayed.',
    date: '2024-01-04',
    status: 'pending',
    helpful: 8,
    notHelpful: 1,
  },
  {
    id: '3',
    website: 'suspicious-site.com',
    reviewer: 'Bob Wilson',
    rating: 1,
    comment: 'This site looks like a scam. Avoid at all costs!',
    date: '2024-01-03',
    status: 'flagged',
    helpful: 25,
    notHelpful: 0,
  },
];

export default function AdminReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredReviews = dummyReviews.filter(review => {
    const matchesSearch = review.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.reviewer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'flagged':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">({rating})</span>
      </div>
    );
  };

  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar currentPage="reviews" />
        <AdminSidebar currentPage="reviews" />
        
        {/* Main Content */}
        <div className="md:pl-64 pt-16">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Website Reviews
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Moderate and manage website reviews from users
              </p>
            </div>

            {/* Filters and Search */}
            <Card className="p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search by website or reviewer..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="all">All Status</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="flagged">Flagged</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Reviews List */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {review.website}
                          </h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(review.status)}`}>
                            {review.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-green-600">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-3">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          by {review.reviewer}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          {review.date}
                        </span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {review.comment}
                      </p>

                      <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{review.helpful}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsDown className="h-4 w-4" />
                          <span>{review.notHelpful}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>Review ID: {review.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminRouteGuard>
  );
}