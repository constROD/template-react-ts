import { styled } from 'shared/theme';

export const AboutWrapper = styled.div`
  background: ${({ theme }) => theme.colors.red100};

  .content {
    width: 100%;
    margin: 0 auto;
  }

  ${({ theme }) => theme.screens.xSmallMedia} {
    .content {
    }
  }
  ${({ theme }) => theme.screens.smallMedia} {
    .content {
    }
  }
  ${({ theme }) => theme.screens.mediumMedia} {
    .content {
    }
  }
  ${({ theme }) => theme.screens.largeMedia} {
    .content {
    }
  }
  ${({ theme }) => theme.screens.xLargeMedia} {
    .content {
    }
  }
`;
