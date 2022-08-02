import {
  Card,
  CardHeader,
  Typography,
  CardActionArea,
  IconButton,
  Divider
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const SwipeIndicator = experimentalStyled(IconButton)(
  ({ theme }) => `
        
        color: ${theme.colors.primary.light};
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        border-radius: 100px;

        &:hover {
          color: ${theme.colors.alpha.black[100]};
          background: ${theme.colors.alpha.black[5]};
        }
`
);

const CardWrapper = experimentalStyled(Card)(
  ({ theme }) => `
        box-shadow: none;
        padding: ${theme.spacing(1)};
        text-align: center;
        
        img {
          width: 90%;
          margin: ${theme.spacing(2)} 0 ${theme.spacing(3)};
        }
`
);

function TrainingPrograms() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardHeader
        action={
          <>
            <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
              <ChevronLeftTwoToneIcon />
            </SwipeIndicator>
            <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
              <ChevronRightTwoToneIcon />
            </SwipeIndicator>
          </>
        }
        title={t('Training programs')}
      />
      <Divider />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: '.MuiSwipe-right',
          prevEl: '.MuiSwipe-left'
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 0
          }
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
      >
        <SwiperSlide>
          <CardWrapper>
            <CardActionArea>
              <img src="/static/images/placeholders/fitness/1.jpg" alt="..." />
              <Typography
                align="center"
                variant="h3"
                color="text.primary"
                gutterBottom
              >
                {t('Stretching')}
              </Typography>
              <Typography align="center" variant="subtitle2" sx={{ mb: 3 }}>
                {t('Team activity')}
              </Typography>
            </CardActionArea>
          </CardWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CardWrapper>
            <CardActionArea>
              <img src="/static/images/placeholders/fitness/2.jpg" alt="..." />
              <Typography
                align="center"
                variant="h3"
                color="text.primary"
                gutterBottom
              >
                {t('Rope Jumping')}
              </Typography>
              <Typography align="center" variant="subtitle2" sx={{ mb: 3 }}>
                {t('Team activity')}
              </Typography>
            </CardActionArea>
          </CardWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CardWrapper>
            <CardActionArea>
              <img src="/static/images/placeholders/fitness/3.jpg" alt="..." />
              <Typography
                align="center"
                variant="h3"
                color="text.primary"
                gutterBottom
              >
                {t('Yoga')}
              </Typography>
              <Typography align="center" variant="subtitle2" sx={{ mb: 3 }}>
                {t('Individual')}
              </Typography>
            </CardActionArea>
          </CardWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CardWrapper>
            <CardActionArea>
              <img src="/static/images/placeholders/fitness/4.jpg" alt="..." />
              <Typography
                align="center"
                variant="h3"
                color="text.primary"
                gutterBottom
              >
                {t('Fitness')}
              </Typography>
              <Typography align="center" variant="subtitle2" sx={{ mb: 3 }}>
                {t('Team activity')}
              </Typography>
            </CardActionArea>
          </CardWrapper>
        </SwiperSlide>
      </Swiper>
    </Card>
  );
}

export default TrainingPrograms;
