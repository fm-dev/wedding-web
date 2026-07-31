import Countdown from 'react-countdown';

export default function CountDown() {
    return (
    <Countdown
      date={new Date('2026-08-01T00:00:00')}
      renderer={({ days, hours, minutes, seconds }) => (
        <span>
          {days} hari {hours} jam {minutes} menit {seconds} detik
        </span>
      )}
    />
  );
}