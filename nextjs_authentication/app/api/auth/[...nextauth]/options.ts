import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

import bcrypt from 'bcryptjs';

// If the database exists, connect to it
import dbConnect from '@/lib/dbConnect';

// Also import the User model if you have one
import { User } from '@/models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
        id: 'credentials',
        name: 'Credentials',
        credentials: {
            username: { label: 'Username', type: 'text', placeholder: 'Enter your username' },
            password: { label: 'Password', type: 'password', placeholder: 'Enter your password' }
        },
        async authorize(credentials: any): Promise<any> {
            // Connect to the database
            await dbConnect();

            try {
                // Find the user by username
                const user = await User.findOne({ $or: [{ username: credentials.username }, { email: credentials.username }] });
                // If the user is not found or the password is incorrect, return null
                if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
                    return null;
                }
    
                // If the user is found and the password is correct, return the user object
                return user;
            } catch (error) {
                console.error('Error finding user:', error);
                return null;
            }

        }
    })
}