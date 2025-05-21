import { useFormStatus } from "react-dom"

type Props = {

};

export default function SearchButton({inpName, label}:Props) {
    const { pending } = useFormStatus();
    return <button disabled={pending}>
        {pending ? `searching... ${data.get(inpName)}`}: label}
    </button>
}