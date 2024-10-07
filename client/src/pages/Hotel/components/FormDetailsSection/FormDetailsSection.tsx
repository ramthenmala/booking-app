import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form"
import { Textarea } from "@nextui-org/input";
import { IHotel } from "../../../../types/IHotels";

const FormDetailsSection: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<IHotel>();

    return (
        <section>
            <h2 className="text-3xl font-bold mb-4">Add your Hotel details</h2>

            <div className="flex flex-col gap-4">
                <div className="w-full">
                    <Input
                        isRequired
                        type="text"
                        label="Hotel Name"
                        isInvalid={errors.name && true}
                        errorMessage={errors.name && errors.name.message}
                        {...register('name', { required: 'Please enter your Hotel Name to proceed' })}
                    />
                </div>

                <div className="w-full">
                    <Input
                        isRequired
                        type="text"
                        label="City"
                        isInvalid={!!errors.city}
                        errorMessage={errors.city?.message}
                        {...register('city', { required: 'Please enter your City to proceed' })}
                    />
                </div>

                <div className="w-full">
                    <Textarea
                        label="Description"
                        placeholder="Enter description"
                        isRequired
                        minRows={6}
                        isInvalid={!!errors.description}
                        errorMessage={errors.description?.message}
                        {...register('description', { required: 'Please provide a description' })}
                    />
                </div>

                <div className="flex flex-row md:justify-between gap-4">
                    <div className="w-full">
                        <Input
                            isRequired
                            type="number"
                            label="Price Per Night"
                            isInvalid={!!errors.pricePerNight}
                            errorMessage={errors.pricePerNight?.message}
                            {...register('pricePerNight', {
                                required: 'Please enter your Price per night',
                                valueAsNumber: true,
                                min: {
                                    value: 0,
                                    message: 'Price must be at least 0',
                                },
                            })}
                        />
                    </div>
                    <div className="w-full">

                        <Select
                            label="Hotel Rating"
                            isInvalid={!!errors.starRating}
                            errorMessage={errors.starRating && errors.starRating.message}
                            // {...register('starRating', {
                            //     required: 'Please select a rating for the hotel',
                            //     valueAsNumber: true,
                            // })}


                            {...register('starRating', { required: 'Please provide a description' })}
                        >
                            {[1, 2, 3, 4, 5].map((starRate) => (
                                <SelectItem
                                    key={starRate}
                                    value={starRate}
                                    textValue={String(starRate)}
                                    className="bg-white hover:bg-gray-200">
                                    {starRate}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FormDetailsSection;
