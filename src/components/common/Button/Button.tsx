import styles from './Button.module.scss';

interface Props {
    title: string;
    isDisabled?: boolean;
    onClick: () => void;
    color: string;
}

const Button: React.FC<Props> = ({ title, isDisabled, onClick, color }) => {
    const handleColor = () => {
        switch (color) {
            case 'green':
                return styles.green;
            case 'red':
                return styles.red;
            case 'pink':
                return styles.pink;
            case 'blue':
                return styles.blue;
            default:
                break;
        }
    };

    return (
        <button
            className={`${styles.button} ${handleColor()}`}
            disabled={isDisabled}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
