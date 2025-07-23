// How do I get the data into this component? params?
import type { Links } from '../types';

export default function Button(params: Links) {
  return (
    <a
      href="https://deanhowe.dev"
      target="_blank"
      className="bg-(--background-light) w-full flex justify-center items-center py-2.5 cursor-pointer leading-6 font-bold rounded-lg hover:bg-[#c4f82a] duration-200 hover:text-[#141414]"
      key={params.id}
    >
      {params.title}
    </a>
  );
}
