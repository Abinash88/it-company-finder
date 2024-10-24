import { cn } from '@/lib/utils';
import * as A from '../ui/avatar';

type TProps = {
  src?: string;
  name?: string;
  bg?: 'none' | string;
  size?: string;
  className?: string;
  radius?: string;
};

const Avatar: React.FC<TProps> = ({
  bg,
  name,
  src,
  size,
  className,
  radius,
}) => {
  return (
    <A.Avatar
      style={{
        width: size || '40px',
        height: size || '40px',
        aspectRatio: '1 / 1',
        borderRadius: radius,
      }}
    >
      <A.AvatarImage
        src={
          src ||
          `https://ui-avatars.com/api/?name=${name || 'User'}&${
            bg === 'none' ? '' : `background=${bg || 'E1E6FF'}`
          }`
        }
        width={40}
        height={40}
        style={{
          width: size || '40px',
          height: size || '40px',
        }}
        alt={`${name || 'User'}'s Avatar`}
        className={cn(`object-cover rounded-none`, className)}
      />
      <A.AvatarFallback>
        <img
          src={`https://ui-avatars.com/api/?name=${name || 'User'}&${
            bg === 'none' ? '' : `background=${bg || 'E1E6FF'}`
          }`}
          width={40}
          height={40}
          alt={`${name || 'User'}'s Avatar`}
          title='This image URL has expired or has been removed.'
        />
      </A.AvatarFallback>
    </A.Avatar>
  );
};

export default Avatar;
