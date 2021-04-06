import Icon from "@chakra-ui/icon";
import { 
  Link as ChakarLink,
  LinkProps as ChakraLinkProps,
  Text 
} from "@chakra-ui/layout";
import { ActiveLink } from '../ActiveLink';

import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

export function NavLink({icon, children, href, ...rest}: NavLinkProps) {
  return (
    <ActiveLink href={href}>
      <ChakarLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text> 
      </ChakarLink>
    </ActiveLink>
  );
}