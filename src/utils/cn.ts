import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(...input: ClassValue[]): string {
    return twMerge(clsx(input));
}
