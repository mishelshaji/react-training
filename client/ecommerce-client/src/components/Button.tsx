interface ButtonProps {
    content: string | null;
    icon?: string | null;
    type?: "button" | "submit" | "reset";
    severity?: "primary" | "secondary" | "danger";
}

function Button(props: ButtonProps) {
    const severityClasses: Record<string, string> = {
        primary: "bg-blue-600 hover:bg-blue-800",
        secondary: "bg-gray-600 hover:bg-gray-800",
        danger: "bg-red-600 hover:bg-red-800"
    };

    const buttonClass = severityClasses[props.severity || "primary"];

    return (
        <button
            type={props.type? "button": props.type}
            className={`${buttonClass} p-2 rounded text-white`}>
                { props.content }
        </button>
    )
}

export default Button;
