import { FormProvider, useForm } from "react-hook-form"
import { IHotel } from "../../../types/IHotels"
import FormDetailsSection from "../components/FormDetailsSection/FormDetailsSection"
import FormTypeSection from "../components/FormDetailsSection/FormTypeSection"
import FromFacilitiesSection from "../components/FormDetailsSection/FromFacilitiesSection"
import FormGuests from "../components/FormDetailsSection/FormGuests"
import FormFileUpload from "../components/FormDetailsSection/FormFileUpload"
import { Button } from "@nextui-org/button"

const ManageHotelForm = () => {

    const formMethods = useForm<IHotel>();
    const { handleSubmit } = formMethods

    const onHandleSubmit = handleSubmit((formDataJson: IHotel) => {
        console.log('formdata', formDataJson)
        const formData = new FormData();
        

    })

    return (
        <div className="flex flex-col gap-5">
            <FormProvider {...formMethods}>
                <form className="flex flex-col gap-5 max-w-xl w-full mx-auto" onSubmit={onHandleSubmit}>
                    <FormDetailsSection />
                    <FormTypeSection />
                    <FromFacilitiesSection />
                    <FormGuests />
                    <FormFileUpload />
                    <div className="flex justify-center mt-6">
                        <Button radius="full" type="submit" variant="solid" color="primary">
                            Submit
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default ManageHotelForm