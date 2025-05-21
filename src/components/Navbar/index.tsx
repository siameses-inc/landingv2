import logoAsset from '@/assets/logo.png';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '../ui/navigation-menu';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 h-20">
      <div className="flex items-center gap-2">
        <Image
          src={logoAsset}
          alt="Siameses"
          width={200}
          height={200}
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold">Siameses</h1>
      </div>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-10">
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Link1</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Link2</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Link3</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
