#!/bin/bash

# Sitemap Testing Script
# This script helps you test your dynamic sitemap implementation

echo "🚀 Testing Dynamic Sitemap Implementation"
echo "========================================"

# Function to check URL availability
check_url() {
    local url=$1
    local name=$2
    echo -n "Testing $name... "
    
    if command -v curl >/dev/null 2>&1; then
        response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
        if [ "$response" = "200" ]; then
            echo "✅ OK ($response)"
        else
            echo "❌ FAILED ($response)"
        fi
    else
        echo "⚠️  curl not available"
    fi
}

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local not found. Please copy .env.example to .env.local"
    echo "   cp .env.example .env.local"
    echo ""
fi

# Read SITE_URL from .env.local or use default
if [ -f ".env.local" ]; then
    SITE_URL=$(grep NEXT_PUBLIC_SITE_URL .env.local | cut -d '=' -f2)
fi

if [ -z "$SITE_URL" ]; then
    SITE_URL="http://localhost:3000"
    echo "Using default URL: $SITE_URL"
fi

echo "Testing against: $SITE_URL"
echo ""

# Start Next.js dev server if not running
if ! curl -s "$SITE_URL" > /dev/null 2>&1; then
    echo "🔧 Starting Next.js development server..."
    npm run dev &
    DEV_PID=$!
    echo "   Started with PID: $DEV_PID"
    echo "   Waiting for server to start..."
    sleep 10
fi

echo "📋 Running Sitemap Tests"
echo "-----------------------"

# Test main endpoints
check_url "$SITE_URL/sitemap.xml" "XML Sitemap"
check_url "$SITE_URL/robots.txt" "Robots.txt"
check_url "$SITE_URL/api/sitemap" "API Sitemap (XML)"
check_url "$SITE_URL/api/sitemap?format=json" "API Sitemap (JSON)"

echo ""
echo "📊 Testing Sample Pages"
echo "----------------------"

# Test static pages
check_url "$SITE_URL/" "Homepage"
check_url "$SITE_URL/about" "About Page"
check_url "$SITE_URL/contact" "Contact Page"
check_url "$SITE_URL/faq" "FAQ Page"
check_url "$SITE_URL/check" "Check Report Page"

echo ""
echo "🌐 Testing Localized Pages"
echo "--------------------------"

# Test localized pages
check_url "$SITE_URL/hi" "Hindi Homepage"
check_url "$SITE_URL/hi/about" "Hindi About"
check_url "$SITE_URL/or/contact" "Odia Contact"

echo ""
echo "🔧 Admin Interface"
echo "------------------"

check_url "$SITE_URL/admin/sitemap" "Sitemap Manager"

echo ""
echo "📈 Sitemap Analysis"
echo "-------------------"

if command -v curl >/dev/null 2>&1; then
    echo "Fetching sitemap statistics..."
    
    # Get JSON sitemap data
    sitemap_data=$(curl -s "$SITE_URL/api/sitemap?format=json")
    
    if echo "$sitemap_data" | grep -q "success"; then
        count=$(echo "$sitemap_data" | grep -o '"count":[0-9]*' | cut -d ':' -f2)
        echo "   📊 Total URLs: $count"
        
        # Count static vs dynamic pages
        static_count=$(echo "$sitemap_data" | grep -o '"url":"[^"]*"' | grep -v '/check/' | grep -v '/blog/' | wc -l | tr -d ' ')
        dynamic_count=$((count - static_count))
        
        echo "   📄 Static pages: $static_count"
        echo "   🔄 Dynamic pages: $dynamic_count"
        
        # Check for localized URLs
        localized_count=$(echo "$sitemap_data" | grep -o '"url":"[^"]*"' | grep -E '/(hi|or)/' | wc -l | tr -d ' ')
        echo "   🌐 Localized URLs: $localized_count"
    else
        echo "   ❌ Failed to fetch sitemap statistics"
    fi
fi

echo ""
echo "✅ Validation Checklist"
echo "======================"

echo "□ Update NEXT_PUBLIC_SITE_URL in .env.local"
echo "□ Test sitemap.xml in browser"
echo "□ Submit sitemap to Google Search Console"
echo "□ Submit sitemap to Bing Webmaster Tools" 
echo "□ Add dynamic content fetching logic"
echo "□ Configure caching headers"
echo "□ Set up monitoring"

echo ""
echo "🎉 Sitemap testing complete!"

# Cleanup
if [ ! -z "$DEV_PID" ]; then
    echo "Stopping development server..."
    kill $DEV_PID 2>/dev/null
fi