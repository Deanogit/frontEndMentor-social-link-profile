import Image from 'next/image';
import avatar from '@/public/avatar-jessica.jpeg';

export default function Header() {
  return (
    <div className="p-4 flex items-center flex-col">
      <Image
        src={avatar}
        alt="Jessica Avatar"
        className="rounded-full w-[88px] h-[88px]"
        width={176}
        height={176}
        priority
      />
      <div className="py-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Jessica Randal</h1>
        <h2 className="text-[14px] leading-6 font-bold text-[#c4f82a]">
          London, United Kingdom
        </h2>
      </div>
      <p className="text-[14px] leading-6 min-w-[279px] text-center">
        &ldquo;Front-end developer and avid reader.&rdquo;
      </p>
    </div>
  );
}
