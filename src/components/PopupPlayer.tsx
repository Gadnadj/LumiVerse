import React from 'react';

type Props = {
    isPlay: boolean;
    setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;

}

const PopupPlayer = ({ isPlay, setIsPlay }: Props) => {
    return (
        <div>PopupPlayer</div>
    );
};

export default PopupPlayer;