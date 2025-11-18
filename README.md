১.What are some differences between interfaces and types in TypeScript?
উত্তরঃ TypeScript এ interface মুলত কোনো
 অবজেক্ট গঠন বা শেপ নির্ধারণ করতে ব্যাবহার হয় এবং ক্লাস এর সাথের কাজ করার ক্ষেত্রে সবচেয়ে উপযোগী। অন্যদিকে type আরও flexible এটি object,union,tuple,primitive সহ বিভিন্ন ধরণের টাইপ তৈরি করতে পারে। interface  একাধিকবার declare  করলে merge হয়ে যায়।কিন্তু type কখনও merge হয় না।interface সাধারণত গঠন করতে ব্যাবহার হয়।আর type ব্যাবহার হয় জটিল type তৈরি করতে।
 উদাহরণঃ
 interface User { name: string; age: number; }
 type ID = string | number;


২.What is the use of the keyof keyword in TypeScript? Provide an example.
উত্তরঃ keyof কোনো object type-এর সব property name-কে union type হিসেবে রিটার্ন করে।এটি dynamic এবং type-safe key access করতে সাহায্য করে, যাতে ভুল property নাম ব্যবহার হওয়ার ঝুঁকি কমে।Generic ফাংশনে এটি অত্যন্ত কার্যকর কারণ এটি নিশ্চিত করে যে শুধুমাত্র valid keys-ই ব্যবহৃত হচ্ছে।keyof কোডকে আরও reusable ও নিরাপদ করে তোলে।
Object handling, form validation এবং API response mapping-এর মতো কাজগুলোতে এটি প্রচুর ব্যবহার হয়।

উদাহরণ:

interface Product { name: string; price: number; }
type Keys = keyof Product;