
import { useFormContext } from "react-hook-form";
import { IHotel } from "../../../../types/IHotels";
import { Input } from "@nextui-org/input";

const FormGuests = () => {
    const { register, formState: { errors } } = useFormContext<IHotel>();

    return (
        <section>
            <h2 className="text-2xl font-bold border-t border-gray-300 pt-6 pb-0 mb-0">Add Group Details</h2>
            <div className="flex flex-row md:justify-between gap-4">
                <Input
                    isRequired
                    type="number"
                    label="Adults"
                    max={10}
                    placeholder="Please select number of adutls"
                    isInvalid={!!errors.adultCount}
                    errorMessage={errors.adultCount && errors.adultCount.message}
                    {...register('adultCount', {
                        required: 'Please select the number of adults',
                        max: {
                            value: 9,
                            message: 'The maximum number of adults is 9',
                        },
                        maxLength: {
                            value: 1,
                            message: 'Only a single digit is allowed',
                        },
                    })}
                />

                <Input
                    isRequired
                    max={10}
                    type="number"
                    label="Kids"
                    placeholder="Please select number of kids"
                    isInvalid={!!errors.childCount}
                    errorMessage={errors.childCount && errors.childCount.message}
                    {...register('childCount', {
                        required: 'Please Select number of childs',
                        max: {
                            value: 10,
                            message: 'The maximum number of childs is 10',
                        },
                    })}
                />
            </div>
        </section>

    )
}

export default FormGuests