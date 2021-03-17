import Link from "next/link";

const Page = () => {
    return (
        <ul>
            <li>
                <Link href={'/redux/redux01'}>
                    <a>redux01</a>
                </Link>
            </li>
            <li>
                <Link href={'/redux/redux02'}>
                    <a>redux02</a>
                </Link>
            </li>
            <li>
                <Link href={'/redux/redux03'}>
                    <a>redux03</a>
                </Link>
            </li>
            <li>
                <Link href={'/redux/redux04'}>
                    <a>redux04</a>
                </Link>
            </li>
            <li>
                <Link href={'/redux/redux05'}>
                    <a>redux05</a>
                </Link>
            </li>
        </ul>
    )
}

export default Page
