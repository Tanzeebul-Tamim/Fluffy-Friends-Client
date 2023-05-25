import Swal from "sweetalert2";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import { FaPen } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const ToyRow = ({ toy, onDelete  }) => {

  const handleDelete = () => {
    Swal.fire({
      title: `Are you sure you want to delete ${toy.productName}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      imageUrl: toy.photoURL,
      imageWidth: 200,
      imageHeight: 200,
      backdrop: `
            rgba(0, 0, 0, 0.562)
          `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`   https://toy-marketplace-server-puce-ten.vercel.app/allToys/id/${toy._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              onDelete(toy._id); 
            }
          });
      }
    });
  };

  const handleUpdatePrice = (updatedToy) => {
    fetch(`   https://toy-marketplace-server-puce-ten.vercel.app/allToys/id/${toy._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Product updated successfully!",
            `${toy.productName} has been updated!`,
            "success"
          );
        }
      });
  }

  const handleUpdateQuantity = (updatedToy) => {
    fetch(`   https://toy-marketplace-server-puce-ten.vercel.app/allToys/id/${toy._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Product updated successfully!",
            `${toy.productName} has been updated!`,
            "success"
          );
        }
      });
  }

  const handleUpdateDescription = (updatedToy) => {
    fetch(`   https://toy-marketplace-server-puce-ten.vercel.app/allToys/id/${toy._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Product updated successfully!",
            `${toy.productName} has been updated!`,
            "success"
          );
        }
      });
  }

  return (
    <tr className="text-pink-700" key={toy._id}>
      <td scope="col" className="px-6 py-3">
        <img
          className="mask mask-squircle"
          style={{ height: "70px", width: "70px" }}
          src={toy.photoURL}
        />
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
      >
        {toy.productName}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
      >
        {toy.sellerName}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
      >
        {toy.category}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
      >
        ${toy.price}
      </td>
      <td
        scope="col"
        className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
      >
        {toy.availableQuantity}
      </td>
      <td scope="col" className="text-xl">
        <div className="flex justify-end me-9 items-center gap-4">
          <label
            htmlFor="my-modal-5"
            data-tip="Edit Product"
            className="tooltip cursor-pointer tooltip-top bg-pink-300 flex items-center gap-1 text-lg p-2 rounded-lg"
          >
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <UpdateProduct
            onUpdatePrice={handleUpdatePrice}
            onUpdateQuantity={handleUpdateQuantity}
            onUpdateDescription={handleUpdateDescription}>               
            </UpdateProduct>
            <FaPen />
          </label>
          <button
            onClick={handleDelete}
            data-tip="Delete Product"
            className="tooltip tooltip-top bg-pink-300 flex items-center gap-1 text-lg p-2 rounded-lg"
          >
            <CgClose />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ToyRow;
