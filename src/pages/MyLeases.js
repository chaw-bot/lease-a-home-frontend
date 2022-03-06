import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getLeaseApartment from '../helpers/leaseApartment';
import { getMyLeasesAction } from '../redux/lease/lease';

const MyLeases = () => {
  const dispatch = useDispatch();
  const { myLeases } = useSelector((state) => state);
  const { loading, leases, error } = myLeases;

  useEffect(() => {
    dispatch(getMyLeasesAction());
    getLeaseApartment(1);
    console.log('loading ->', loading, 'leases ->', leases, 'error ->', error, 'link', Link);
  }, []);

  return (
    <div className="container p-5">
      {/* <div className="row g-5 d-flex justify-content-center">
        {error && <div className="alert alert-danger">error.message</div>}
        {
          loading ? <div> loading ...</div> : leases.map((lease) => (
            <div key={lease.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
              <div className="card w-90">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top " alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Lorem Ipsum Depricano soto lore delsmu sewds
                    {console.log('lease apartment', lease.apartment)}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <Link to={`/my_leases/${lease.id}`} className="btn text-info">More Details</Link>
                </div>
              </div>
            </div>
          ))
        }

      </div> */}
    </div>
  );
};

export default MyLeases;
