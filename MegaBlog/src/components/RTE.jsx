import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({name, control, label, defaultValue="", ...props}) {
    

    return (<>
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1"></label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({field: {onChange}}) => {
                    <Editor
                        initialValue='default value'
                        init={
                                {
                                    branding: false,
                                    height: 500,
                                    menubar: true,
                                    plugin: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | bold italic | backcolor | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | removeformat | help',
                                    contentStyle: "body { font-family:Helvetica, Arial, sans-sarif; font-size:14px}"
                                }}
                                onEditorChange={onChange}
                                >
                    </Editor>
                }}
            ></Controller>
        
        </div>



        
        </>
    );
}

export default RTE