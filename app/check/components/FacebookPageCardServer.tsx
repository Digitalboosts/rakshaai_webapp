import React from 'react';
import { Facebook, Users, CheckCircle2, Info } from 'lucide-react';

export default function FacebookPageCardServer({ fb }: { fb?: any }) {
    if (!fb) return null;

    const {
        name,
        id,
        url,
        profile_picture,
        cover_photo,
        followers,
        following,
        profile_type,
        profile_intro_text,
        category,
        email,
        managed_by,
        verified,
    } = fb || {};

    if (!name && !url) return null;

    return (
        <div className="rounded-xl p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/30">
            {/* Cover Photo (server-rendered, non-interactive) */}
            {cover_photo && (
                <div className="mb-4 -mx-6 -mt-6">
                    <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl relative overflow-hidden">
                        <img src={cover_photo} alt="Cover photo" className="w-full h-full object-cover" />
                    </div>
                </div>
            )}

            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        {profile_picture ? (
                            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-200 dark:border-blue-800">
                                <img src={profile_picture} alt={`${name} profile`} className="w-full h-full object-cover" />
                            </div>
                        ) : (
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                                <Facebook aria-hidden="true" className="h-6 w-6 text-white" />
                            </div>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">{name || 'Unknown'}</h2>
                            {verified && <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-blue-500 flex-shrink-0" />}
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">{category || 'Facebook Page'} • {profile_type || 'PAGE'}</p>
                            {profile_intro_text && <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{profile_intro_text}</p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="">
                            <h3 className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2"><Users aria-hidden="true" className="h-4 w-4" /><span>Followers</span></h3>
                            <p className="mt-2 text-lg font-bold text-gray-900 dark:text-white">{followers ?? 'N/A'}</p>
                        </div>
                    </div>

                    {following && (
                        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                            <div className="">
                                <h3 className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2"><Users aria-hidden="true" className="h-4 w-4" /><span>Following</span></h3>
                                <p className="mt-2 text-lg font-bold text-gray-900 dark:text-white">{following}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <div className="flex items-center">
                        <h3 className="text-sm text-gray-600 dark:text-gray-400">Verification</h3>
                        <p className="ml-2 text-xs text-gray-500">{verified ? 'Verified by Facebook' : 'Not Verified'}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${verified ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'}`}>{verified ? '✓ Verified' : 'Not Verified'}</span>
                </div>

                {email && (
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm text-gray-600 dark:text-gray-400">Contact Email</h3>
                            <p className="text-sm text-gray-900 dark:text-white">{email}</p>
                        </div>
                    </div>
                )}

                {managed_by && (
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm text-gray-600 dark:text-gray-400">Managed By</h3>
                            <p className="text-sm text-gray-900 dark:text-white">{managed_by}</p>
                        </div>
                    </div>
                )}

                <div>
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl font-medium transition-colors">Visit Facebook Page</a>
                    ) : (
                        <div className="block w-full py-3 px-4 bg-gray-400 text-white text-center rounded-xl font-medium cursor-not-allowed">No Page Available</div>
                    )}
                </div>
            </div>
        </div>
    );
}
