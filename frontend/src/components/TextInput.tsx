type Props = {
    placeholder:string;
    setValue: any;
    type: string;
};

const TextInput = (props: Props) => {
  const handleChange = (value: string) => {
    props.setValue(value)
  }
  return (
    <div className="w-full flex py-[10px]">
      <input
        type={props.type}
        onChange={(e) => handleChange(e.target.value)}
        className="border-b w-full text-sm sm:text-base outline-none py-[10px] caret-[#BABABA]"
        placeholder={`${props.placeholder}`}
      />
    </div>
  );
};

export default TextInput;
