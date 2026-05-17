import { MainContainer } from '@plutonaut/web/src/components/main-container';
import { HeaderLogo } from './header-logo';
import { HeaderNav } from './header-nav';

export function Header() {
  return (
    <header className="w-full border-b sticky top-0 left-0 right-0 z-50 bg-background/50">
      <MainContainer className="flex items-center justify-between py-4">
        <HeaderLogo />
        <HeaderNav />
      </MainContainer>
    </header>
  );
}
