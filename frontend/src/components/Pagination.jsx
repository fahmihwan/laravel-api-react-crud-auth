import React from "react";

export const Pagination = ({ data, fetchData }) => {
    return (
        <div className="mt-10">
            <p className="text-sm text-gray-400">{data?.total} items</p>
            <div className="btn-group">
                {data?.links?.map((d, i) =>
                    d.url !== null ? (
                        <button
                            // onClick={() => dispatch(getPosts(d.url))}
                            className={`btn ${d.active && "btn-primary"}`}
                            key={i}
                        >
                            {d.label}
                        </button>
                    ) : (
                        <button key={i} className="btn btn-disabled">
                            {d.label}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};
