import { useFormContext } from "react-hook-form";
import { IHotel } from "../../../../types/IHotels";
import { CloudUploadIcon } from "lucide-react";

const FormFileUpload = () => {
    const { register, formState: { errors } } = useFormContext<IHotel>();

    return (
        <section>
            <h2 className="text-2xl font-bold border-t border-gray-300 pt-6 pb-0 mb-0">Add Hotel Pictures</h2>
            <p className="text-slate-400 mb-4">Maximum 5 images allowed</p>
            <div className="flex items-center justify-center w-full relative">
                <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-64 border-2 ${errors.imageUrls ? 'border-red-300 bg-red-200 dark:bg-red-900' : 'border-blue-100 bg-blue-50 dark:bg-gray-700'} border-dashed rounded-lg cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <CloudUploadIcon className={`w-8 h-8 mb-4 ${errors.imageUrls ? 'text-red-500' : 'text-blue-600 dark:text-gray-400'}`} />
                        <p className={`mb-2 text-sm ${errors.imageUrls ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className={`text-xs ${errors.imageUrls ? 'text-red-400' : 'text-gray-500 dark:text-gray-400'}`}>
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>

                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="w-full text-gray-700 font-normal absolute top-0 right-0 bottom-0 left-0 opacity-0"
                        {...register("imageUrls", {
                            validate: (imageFiles) => {
                                const totalLength = imageFiles.length;

                                if (totalLength === 0) {
                                    return "At least one image should be added";
                                }

                                if (totalLength > 5) {
                                    return "Total number of images cannot be more than 5";
                                }

                                return true;
                            },
                        })}
                    />
                </label>
            </div>

            {errors.imageUrls && (
                <p className='text-red-500 text-xs mt-2'>{errors.imageUrls.message}</p>
            )}
        </section>
    );
};

export default FormFileUpload;
