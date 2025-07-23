import Button from '@/app/components/Button';
import { getAllLinks } from '../lib/links';
import type { Links } from '../types';

export default async function LinkList() {
  const links = await getAllLinks();
  return (
    <div className="flex flex-col gap-4">
      {links.map((links: Links) => {
        return <Button key={links.id} id={links.id} title={links.title} />;
      })}
    </div>
  );
}
