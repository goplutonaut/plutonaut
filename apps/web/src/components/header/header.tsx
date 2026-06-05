import { HeaderLogo } from '@plutonaut/web/src/components/header/header-logo';
import { HeaderNav } from '@plutonaut/web/src/components/header/header-nav';
import { ThemeToggle } from '@plutonaut/web/src/components/header/theme-toggle';
import { MainContainer } from '@plutonaut/web/src/components/main-container';

export function Header() {
  return (
    <header className="w-full border-b sticky top-0 left-0 right-0 z-50 bg-background/50">
      <MainContainer className="flex items-center justify-between py-4">
        <HeaderLogo />
        <div className="flex items-center space-x-4">
          <HeaderNav />
          <ThemeToggle />
        </div>
      </MainContainer>
    </header>
  );
}
