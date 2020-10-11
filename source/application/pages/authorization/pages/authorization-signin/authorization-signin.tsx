import React, { useState, useMemo } from 'react';
import { useStyles } from './authorization-signin.styles';

import { useTranslation } from 'react-i18next';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const USERNAME = 'example';
const PASSWORD = '12345678';

export const AuthorizationSignin: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [isSending, setSending] = useState(false);

  const schema = useMemo(
    () =>
      yup.object({
        username: yup.string().required(t('errors.required')),
        password: yup
          .string()
          .required(t('errors.required'))
          .min(8, t('errors.minLength', { minLength: 8 }))
      }),
    []
  );

  const { handleSubmit, register, errors, setError } = useForm<{
    username: string;
    password: string;
  }>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((values) => {
    setSending(true);

    setTimeout(() => {
      if (values.username !== USERNAME) {
        setError('username', { type: 'manual', message: t('errors.wrongUsername') });
      } else if (values.password !== PASSWORD) {
        setError('password', { type: 'manual', message: t('errors.wrongPassword') });
      }
      setSending(false);
    }, 1000);
  });

  return (
    <Container maxWidth="sm">
      <Box margin={2} padding={2} clone>
        <Paper variant="outlined">
          {t('errors.required')}
          <form className={styles.signin__form} noValidate autoComplete="off" onSubmit={onSubmit}>
            <input style={{ display: 'none ' }} type="text" name="fakeusername" />
            <input style={{ display: 'none ' }} type="password" name="fakepassword" />

            <TextField
              name="username"
              label="Username"
              required
              error={!!errors.username}
              helperText={errors.username?.message || `Correct value is "${USERNAME}"`}
              inputRef={register}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              required
              error={!!errors.password}
              helperText={errors.password?.message || `Correct value is "${PASSWORD}"`}
              inputRef={register}
            />
            <Button type="submit" variant="contained" color="primary" disabled={isSending}>
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
