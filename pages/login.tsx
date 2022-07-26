import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from 'styled/navbar';
import Layout from 'components/Layout';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getError } from 'utils/error';
import Link from 'next/link';
import { StyledForm, FormTitle } from 'styled/login';

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
`;

const login: React.FC = () => {
  const { data: session } = useSession();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { redirect }: any = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const submitHandler = async ({ email, password }: any) => {
    try {
      const result: any = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        alert(result.error);
      }
    } catch (err) {
      alert(getError(err));
    }
  };

  return (
    <Layout title="login">
      <Wrapper>
        <Flex
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <StyledForm onSubmit={handleSubmit(submitHandler)}>
            <FormTitle>Login</FormTitle>
            <div style={{padding: '20px'}}>
              <div style={{padding: '10px'}}>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Please enter your email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                  id="email"
                  autoFocus
                />
                {errors.email && <div>{errors.email.message}</div>}
              </div>
              <div style={{padding: '10px'}}>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Please enter your password',
                    minLength: {
                      value: 6,
                      message: 'password must be more than 5 characters',
                    },
                  })}
                  id="password"
                  autoFocus
                />
                {errors.password && <div>{errors.password.message}</div>}
              </div>
            </div>
            <div>
              <button style={{margin: '20px'}}>Login</button>
            </div>
            <div>
              {' '}
              Don&apos;t have an account? &nbsp;
              <Link href={`/register?redirect=${redirect || '/'}`}>
                Register
              </Link>
            </div>
          </StyledForm>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default login;
