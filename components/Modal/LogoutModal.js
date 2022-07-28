import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/router';

function LogOutModal({ modelOpened, setModelOpened }) {
  const router = useRouter();

  const theme = useMantineTheme();
  const LogoutUser = () => {
    router.push('/logout');
  };

  return (
    <Modal
      withCloseButton={false}
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modelOpened}
      size="35%"
      centered={true}
      onClose={() => {
        setModelOpened(false);
      }}
    >
      <div>
        <h2>
          <b>Do you want to logout?</b>
        </h2>
        <br />
        <div>
          <button
            onClick={() => {
              setModelOpened(false);
              LogoutUser();
            }}
            style={{ margin: '20px' }}
          >
            Yes
          </button>
          <button
            onClick={() => setModelOpened(false)}
            style={{ margin: '20px' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LogOutModal;
