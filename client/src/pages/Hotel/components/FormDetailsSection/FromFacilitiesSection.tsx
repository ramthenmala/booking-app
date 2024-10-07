import { useFormContext } from "react-hook-form";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { hotelFacilities } from "../../../../config/hotelTypes";

const FromFacilitiesSection = () => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <section>
            <h2 className="text-2xl font-bold border-t border-gray-300 pt-6 pb-0">Add your Hotel Facilities</h2>
            <CheckboxGroup
                label="Please select hotel facilities"
                orientation="horizontal"
                isRequired
                isInvalid={!!errors.facilities}
                errorMessage={errors.facilities && errors.facilities.message}
            >
                {
                    hotelFacilities.map((facilities) => (
                        <Checkbox value={facilities} key={facilities}
                            {...register('facilities', {
                                validate: (facilities) => {
                                    if (facilities && facilities.length > 0) {
                                        return true
                                    } else {
                                        return 'At least one facility is required'
                                    }
                                }
                            })}
                        >{facilities}</Checkbox>
                    ))
                }
            </CheckboxGroup>
        </section>

    )
}

export default FromFacilitiesSection