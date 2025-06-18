export interface User {
  id: number;
  username: string;
  password: string; // bcrypt hash
}

export const users: User[] = [
  {
    id: 1,
    username: 'testuser1',
    password: '$2a$10$wQ0QyQwQyQwQyQwQyQwQyOeQwQyQwQyQwQyQwQyQwQyQwQyQwQy' // bcrypt hash for 'password123'
  },
  {
    id: 2,
    username: 'testuser2',
    password: '$2a$10$wQ0QyQwQyQwQyQwQyQwQyOeQwQyQwQyQwQyQwQyQwQyQwQyQwQy' // bcrypt hash for 'password123'
  },
  {
    id: 3,
    username: 'testuser3',
    password: '$2a$10$wQ0QyQwQyQwQyQwQyQwQyOeQwQyQwQyQwQyQwQyQwQyQwQyQwQy' // bcrypt hash for 'password123'
  },
  {
    id: 4,
    username: 'testuser4',
    password: '$2a$10$wQ0QyQwQyQwQyQwQyQwQyOeQwQyQwQyQwQyQwQyQwQyQwQyQwQy' // bcrypt hash for 'password123'
  }
];
