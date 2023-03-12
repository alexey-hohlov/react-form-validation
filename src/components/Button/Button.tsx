import styles from './Button.module.scss';

interface Props {
    title: string;
    isDisabled?: boolean;
    onClick: () => void;
}

const Button: React.FC<Props> = ({ title, isDisabled, onClick }) => {
    return (
        <button disabled={isDisabled} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
