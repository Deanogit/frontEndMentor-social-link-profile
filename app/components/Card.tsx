import Image from 'next/image';
import avatar from '@/public/avatar-jessica.jpeg';

export default function Card() {
  return (
    <div className="p-4">
      <Image src={avatar} alt="Jessica Avatar" />
      <h1>Some text here</h1>
    </div>
  );
}
