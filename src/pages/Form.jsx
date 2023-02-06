import React from "react";
import "../styles/Form.css";
import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg";

const Form = ({ auth }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const selectOptions = [
    {
      value: "Coding Backend with Golang",
      label: "Coding Backend with Golang",
    },
    {
      value: "Coding Frontend with ReactS",
      label: "Coding Frontend with ReactS",
    },
    { value: "Fullstack Developer", label: "Fullstack Developer" },
  ];

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    auth(data);
    onReset();
  };
  const onReset = () => {
    reset((prev) => ({
      ...prev,
      nama: "",
      email: "",
      noHp: "",
      kelas: "",
      radio: "",
      foto: "",
      message: "",
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex ">
        <div className="col-md-4 form-img">
          <div className="kotak w-100 text-center">
            <img className="alta" src="assets/img/logo-ALTA-v2@2x.png" />
          </div>
        </div>
        <div className="col-md-8 isi-form">
          {/* Form Begin */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-title">
                <h3>Pendaftaran peserta Coding Bootcamp</h3>
              </div>
            </div>
            <div className="row mt-5 form-wrapper">
              <div className="col ">
                {/* Field Nama Lengkap */}
                <div className="form-group rincian-form">
                  <label htmlFor="nama" className="required">
                    Nama Lengkap :
                  </label>
                  <input
                    {...register("nama", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    type="text"
                    className="form-control"
                    id="namalengkap"
                    placeholder="Nama lengkap..."
                  />
                  {errors.nama && (
                    <ErrorMsg message="Nama wajib diisi dengan huruf" />
                  )}
                </div>
                {/* Field Email */}
                <div className="form-group rincian-form">
                  <label htmlFor="email" className="required">
                    Email :
                  </label>
                  <input
                    {...register("email", { required: true, maxLength: 20 })}
                    type="email"
                    className="form-control"
                    placeholder="example@domail.com"
                  />
                  {errors.email && <ErrorMsg message="Harap masukkan email" />}
                </div>

                {/* Field No Handphone */}
                <div className="form-group rincian-form">
                  <label htmlFor="telepon" className="required">
                    No. Handphone :
                  </label>
                  <input
                    {...register("noHp", {
                      required: true,
                      min: 9,
                      maxLength: 12,
                    })}
                    type="number"
                    className="form-control"
                    placeholder="08573890xxxxx"
                  />

                  {errors.noHp && (
                    <ErrorMsg message="No Handphone 9 - 12 Digits" />
                  )}
                </div>
                {/* Field Latar Belakang Pendidikan */}
                <div className="form-group rincian-form">
                  <label htmlFor="kewarganegaraan" className="required">
                    Latar Belakang Pendidikan
                  </label>
                  <div className="form-group">
                    <div className="form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="it"
                        {...register("radio", { required: true })}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        IT
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="nonit"
                        {...register("radio", { required: true })}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        Non-IT
                      </label>
                    </div>
                  </div>
                  {errors.radio && (
                    <ErrorMsg message="Harap pilih salah satu" />
                  )}
                </div>
              </div>

              <div className="col">
                <div className="form-group rincian-form">
                  {/* Field Kelas Coding yang dipilih */}
                  <label htmlFor="kewarganegaraan" className="required">
                    Kelas Coding yang dipilih
                  </label>
                  <select
                    {...register("kelas", { required: true })}
                    className="form-control"
                  >
                    <option value="">Pilih salah satu Program</option>
                    <option value={selectOptions[0].value}>
                      {selectOptions[0].label}
                    </option>
                    <option value={selectOptions[1].value}>
                      {selectOptions[1].label}
                    </option>
                    <option value={selectOptions[2].value}>
                      {selectOptions[2].label}
                    </option>
                  </select>
                  {errors.kelas && <ErrorMsg message="Harap pilih kelas" />}
                  {/* Field Foto surat kesungguhan */}
                  <div className="mb-3 input-file">
                    <label htmlFor="formFile" className="form-label required">
                      Foto surat kesungguhan
                    </label>
                    <input
                      {...register("foto", { required: true })}
                      className="form-control"
                      type="file"
                      id="formFile"
                    />
                    {errors.foto && <ErrorMsg message="Harap upload file" />}
                  </div>
                  {/* Field Foto surat kesungguhan */}
                  <div className="form-group">
                    <label htmlFor="message">
                      Harapan untuk Coding Bootcamp ini:
                    </label>
                    <textarea
                      {...register("message", {
                        maxLength: 100,
                        required: false,
                      })}
                      className="form-control"
                      rows={5}
                      id="message"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-wrapper">
              <input type="submit" className="tombol" defaultValue="Submit" />
              <input
                type="button"
                className="tombol"
                onClick={onReset}
                defaultValue="Reset"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
