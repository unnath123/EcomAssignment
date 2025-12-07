'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // If not authenticated and not on login page, redirect to login
        if (!isAuthenticated && pathname !== '/login') {
            const storedUser = localStorage.getItem('user');
            if (!storedUser) {
                router.push('/login');
            }
        }
        // If authenticated and on login page, redirect to home
        if (isAuthenticated && pathname === '/login') {
            router.push('/');
        }
    }, [isAuthenticated, pathname, router]);

    // Prevent flashing of protected content (optional, simple version)
    if (!isAuthenticated && pathname !== '/login') {
        return null; // or a loading spinner
    }

    return <>{children}</>;
}
