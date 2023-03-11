import styles from './Button.module.scss';

interface Props {
    title: string;
    isDisabled?: boolean;
}

const Button: React.FC<Props> = ({ title, isDisabled }) => {
    return <button disabled={isDisabled}>{title}</button>;
};

export default Button;
