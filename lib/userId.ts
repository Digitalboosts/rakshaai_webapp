/**
 * Generate or retrieve a unique user ID from localStorage
 * This ID is used to track anonymous users across sessions
 */
export function getUserId(): string {
    if (typeof window === "undefined") {
        // Server-side, generate temporary ID
        return generateUserId();
    }

    const STORAGE_KEY = "trust-finder-user-id";

    try {
        // Try to get existing user ID from localStorage
        let userId = localStorage.getItem(STORAGE_KEY);

        if (!userId) {
            // Generate new user ID if not exists
            userId = generateUserId();
            localStorage.setItem(STORAGE_KEY, userId);
        }

        return userId;
    } catch (error) {
        // Fallback if localStorage is not available
        console.warn("localStorage not available, using temporary user ID");
        return generateUserId();
    }
}

/**
 * Generate a random user ID
 * Format: timestamp + random number (e.g., 1734278400123456)
 */
function generateUserId(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    return `${timestamp}${random}`;
}

/**
 * Clear user ID from localStorage (for testing or user request)
 */
export function clearUserId(): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem("trust-finder-user-id");
    }
}
