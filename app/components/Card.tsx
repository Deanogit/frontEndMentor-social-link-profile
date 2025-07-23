import Header from '@/app/components/Header';
import LinkList from './LinkList';

export default function Card() {
  return (
    <main className="w-[327px] p-6 md:w-[384px] md:p-10 bg-(--background-mid) rounded-xl">
      <Header />
      <LinkList />
    </main>
  );
}
