import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../../../config/hotelTypes";
import { RadioGroup, Radio } from "@nextui-org/radio";

const FormTypeSection = () => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <section>
            <h2 className="text-2xl font-bold border-t border-gray-300 pt-6 pb-0 mb-0">Add your Hotel type</h2>
            <RadioGroup
                label="Please select your hotel Type"
                orientation="horizontal"
                isRequired
                isInvalid={!!errors.type}
            >
                {
                    hotelTypes.map((type) => (
                        <Radio value={type} key={type}
                            {...register('type', { required: 'Type of hotel is required' })}
                        >{type}</Radio>
                    ))
                }
            </RadioGroup>
        </section>

    )
}

export default FormTypeSection