import Hero from '@/components/Hero/Hero';
import UserPreference from '@/components/UserPreference/UserPreference';
export default function Home() {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <main>
        <UserPreference />
      </main>
    </div>
  );
}
