import TextArea from "components/ReadOnlyTextArea";
import { FC } from "react";

const CommandOutput: FC = () => {
    return (<TextArea contents={['> example 1', '> example 2']} id={'command-output'} label={'Command Output'} />)
};

export default CommandOutput;