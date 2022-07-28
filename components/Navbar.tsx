import React from 'react';
import { Wrapper, Flex, NavContainer, NavIcons } from '../styled/navbar';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { signOut, useSession } from 'next-auth/react';
import DropdownLink from './DropdownLink';

const Navbar = () => {
  const { status, data: session }: any = useSession();

  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <Wrapper>
      <NavContainer>
        <Flex>
          <Link href="/" passHref>
            <NavIcons style={{ marginLeft: '10px' }}>Home</NavIcons>
          </Link>
          <NavIcons>Foodie</NavIcons>
          <NavIcons>Recipe</NavIcons>
        </Flex>
        <Flex>
          <NavIcons>FavList</NavIcons>
          {status === 'loading' ? (
            'Loading'
          ) : session?.user ? (
            <Menu
              as="div"
              style={{
                alignItems: 'center',
                position: 'relative',
                display: ' inline-block',
              }}
            >
              <Menu.Button style={{ padding: '8px', borderRadius: '6px' }}>
                {session.user.name}
              </Menu.Button>
              <Menu.Items
                style={{
                  position: 'absolute',
                  right: '0px',
                  width: '224px',
                  transformOrigin: 'top right',
                }}
              >
                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/profile">
                    Profile
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/order-history">
                    Order History
                  </DropdownLink>
                </Menu.Item>
                {session.user.isAdmin && (
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/admin/dashboard"
                    >
                      Admin Dashboard
                    </DropdownLink>
                  </Menu.Item>
                )}
                <Menu.Item>
                  <a
                    className="dropdown-link"
                    href="#"
                    onClick={logoutClickHandler}
                  >
                    Logout
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/login">
              <NavIcons>Login</NavIcons>
            </Link>
          )}
        </Flex>
      </NavContainer>
    </Wrapper>
  );
};

export default Navbar;
