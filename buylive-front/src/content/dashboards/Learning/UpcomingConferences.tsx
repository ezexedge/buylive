import { useState } from 'react';
import {
  Button,
  Card,
  Box,
  Typography,
  Avatar,
  Grid,
  useTheme,
  Tooltip,
  AvatarGroup,
  IconButton
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import DayPicker from '@material-ui/lab/DayPicker';
import Label from 'src/components/Label';
import EventSeatTwoToneIcon from '@material-ui/icons/EventSeatTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const CardCalendarWrapper = experimentalStyled(Card)(
  ({ theme }) => `
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.gradients.black1};
      color: ${theme.colors.alpha.trueWhite[100]};

      .MuiPickersYear-yearButton,
      .MuiIconButton-root,
      .MuiTypography-root {
        color: ${theme.colors.alpha.trueWhite[100]};
      }
`
);

const SwipeIndicator = experimentalStyled(IconButton)(
  ({ theme }) => `
      color: ${theme.colors.alpha.black[50]};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
      border-radius: 100px;

      &:hover {
        color: ${theme.colors.alpha.black[100]};
        background: ${theme.colors.alpha.black[10]};
      }
`
);

function UpcomingConferences() {
  const { t }: { t: any } = useTranslation();
  const [date, setDate] = useState<Date | null>(new Date());
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">{t('Upcoming Conferences')}</Typography>
        <Box>
          <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
            <ChevronLeftTwoToneIcon />
          </SwipeIndicator>
          <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
            <ChevronRightTwoToneIcon />
          </SwipeIndicator>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardCalendarWrapper>
            <LocalizaitonProvider dateAdapter={AdapterDateFns}>
              <DayPicker
                allowKeyboardControl={false}
                date={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </LocalizaitonProvider>
          </CardCalendarWrapper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Swiper
            spaceBetween={24}
            slidesPerView={2}
            loop
            navigation={{
              nextEl: '.MuiSwipe-right',
              prevEl: '.MuiSwipe-left'
            }}
            pagination={{ dynamicBullets: true, clickable: true }}
          >
            <SwiperSlide>
              <Card sx={{ boxShadow: 'none', p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      sx={{
                        mr: 1,
                        background: `${theme.colors.gradients.black1}`
                      }}
                    >
                      A
                    </Avatar>
                    <Typography variant="h5">Apple</Typography>
                  </Box>
                  <Label color="success">{t('seats available')}</Label>
                </Box>
                <Box sx={{ py: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    10/16/2021 - {t('Remote')}
                  </Typography>
                  <Typography variant="h3">
                    Apple World Wide Developer Conference 2021
                  </Typography>
                </Box>

                <Typography variant="subtitle1">{t('Hosted by')}:</Typography>
                <Box display="flex" justifyContent="flex-start" sx={{ pb: 3 }}>
                  <AvatarGroup max={5}>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Remy Sharp'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Remy Sharp"
                        src="/static/images/avatars/1.jpg"
                      />
                    </Tooltip>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Travis Howard'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Travis Howard"
                        src="/static/images/avatars/2.jpg"
                      />
                    </Tooltip>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Cindy Baker'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Cindy Baker"
                        src="/static/images/avatars/3.jpg"
                      />
                    </Tooltip>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Agnes Walker'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Agnes Walker"
                        src="/static/images/avatars/4.jpg"
                      />
                    </Tooltip>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Trevor Henderson'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Trevor Henderson"
                        src="/static/images/avatars/5.jpg"
                      />
                    </Tooltip>
                  </AvatarGroup>
                </Box>
                <Box>
                  <Button
                    sx={{ mb: 1 }}
                    fullWidth
                    startIcon={<EventSeatTwoToneIcon />}
                    variant="contained"
                  >
                    {t('Book a seat')}
                  </Button>
                  <Button fullWidth variant="outlined">
                    {t('More information')}
                  </Button>
                </Box>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ boxShadow: 'none', p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      src="/static/images/placeholders/logo/google.svg"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="h5">Google</Typography>
                  </Box>
                  <Label color="error">
                    <b>{t('no seats available')}</b>
                  </Label>
                </Box>
                <Box sx={{ py: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    10/23/2021 - {t('Remote')}
                  </Typography>
                  <Typography variant="h3">
                    Google 2021 Mobile Devices Conference
                  </Typography>
                </Box>

                <Typography variant="subtitle1">{t('Hosted by')}:</Typography>
                <Box display="flex" justifyContent="flex-start" sx={{ pb: 3 }}>
                  <AvatarGroup max={5}>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Agnes Walker'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Agnes Walker"
                        src="/static/images/avatars/4.jpg"
                      />
                    </Tooltip>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Cindy Baker'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Cindy Baker"
                        src="/static/images/avatars/3.jpg"
                      />
                    </Tooltip>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Trevor Henderson'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Trevor Henderson"
                        src="/static/images/avatars/5.jpg"
                      />
                    </Tooltip>
                    <Tooltip
                      arrow
                      title={t('View profile for') + ' Travis Howard'}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        component={RouterLink}
                        to="#"
                        alt="Travis Howard"
                        src="/static/images/avatars/2.jpg"
                      />
                    </Tooltip>
                  </AvatarGroup>
                </Box>
                <Box>
                  <Button
                    disabled
                    sx={{ mb: 1 }}
                    fullWidth
                    startIcon={<EventSeatTwoToneIcon />}
                    variant="contained"
                  >
                    {t('Book a seat')}
                  </Button>
                  <Button fullWidth variant="outlined">
                    {t('More information')}
                  </Button>
                </Box>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}

export default UpcomingConferences;
