import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { Flex } from 'styled/navbar';
import { FormTitle, StyledForm } from 'styled/login';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { getError } from 'utils/error';

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
`;

const Register = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  }: any = useForm();
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect }: any = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const submitHandler = async ({ name, email, password }: any) => {
    try {
      await axios.post('api/auth/register', {
        name,
        email,
        password,
      });
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
    <Layout title="Register An Account">
      <Wrapper>
        <Flex
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <StyledForm onSubmit={handleSubmit(submitHandler)}>
            <FormTitle>Register An Account</FormTitle>
            <div style={{ padding: '20px' }}>
              <div style={{ padding: '10px' }}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  autoFocus
                  {...register('name', {
                    required: 'Please enter your name',
                  })}
                />
                {errors.name && <div>{errors.name.message}</div>}
              </div>
              <div style={{ padding: '10px' }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  autoFocus
                  {...register('email', {
                    required: 'Please enter your email address',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.email && <div>{errors.email.message}</div>}
              </div>
              <div style={{ padding: '10px' }}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  autoFocus
                  {...register('password', {
                    required: 'Please enter the password',
                    minLength: {
                      value: 6,
                      message: 'password must be more than 5 characters',
                    },
                  })}
                />
                {errors.password && <div>{errors.password.message}</div>}
              </div>
              <div style={{ padding: '10px' }}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  autoFocus
                  {...register('confirmPassword', {
                    required: 'Please enter the password again',
                    validate: (value: any) => value === getValues('password'),
                    minLength: {
                      value: 6,
                      message: 'password must be more than 5 characters',
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <div>{errors.confirmPassword.message}</div>
                )}
                {errors.confirmPassword &&
                  errors.confirmPassword.type === 'validate' && (
                    <div className="text-red-500 ">Password does not match</div>
                  )}
              </div>
            </div>
            <div>
              <button style={{ margin: '20px' }}>Register</button>
            </div>
            <div>
              {' '}
              Already have an account? &nbsp;
              <Link href={`/register?redirect=${redirect || '/login'}`}>
                Login
              </Link>
            </div>
          </StyledForm>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default Register;
