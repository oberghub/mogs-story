type Props = {
    placeholder:string;
};

const TextInput = (props: Props) => {
  return (
    <div className="w-full flex py-[10px]">
      <input
        type={`text`}
        className="border-b w-full text-sm sm:text-base outline-none py-[10px] caret-[#BABABA]"
        placeholder={`${props.placeholder}`}
      />
    </div>
  );
};

export default TextInput;
